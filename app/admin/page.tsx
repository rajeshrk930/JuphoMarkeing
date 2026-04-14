"use client";

import React, { useState, useEffect } from "react";

interface Lead {
  Timestamp: string;
  Name: string;
  Email: string;
  Phone: string;
  Website: string;
  "Monthly Spend": string;
  Message: string;
  Consent: string;
}

type SortField = keyof Lead;
type SortOrder = "asc" | "desc";

export default function AdminDashboard() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [filteredLeads, setFilteredLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortField, setSortField] = useState<SortField>("Timestamp");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [budgetFilter, setBudgetFilter] = useState("all");
  const [uploading, setUploading] = useState(false);
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [clientNameUpload, setClientNameUpload] = useState("");
  const [campaignUpload, setCampaignUpload] = useState("");
  const [metricUpload, setMetricUpload] = useState("");
  const [captionUpload, setCaptionUpload] = useState("");

  // Check for saved session on mount
  useEffect(() => {
    const savedPassword = localStorage.getItem('adminPassword');
    if (savedPassword === 'jupho2025') {
      setPassword(savedPassword);
      setIsAuthenticated(true);
      fetchLeads(savedPassword);
    }
  }, []);

  // Search and filter effect
  useEffect(() => {
    let result = [...leads];

    // Search filter
    if (searchQuery) {
      result = result.filter(lead =>
        lead.Name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lead.Email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lead.Phone.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lead["Monthly Spend"].toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Budget filter
    if (budgetFilter !== "all") {
      result = result.filter(lead => lead["Monthly Spend"] === budgetFilter);
    }

    // Sorting
    result.sort((a, b) => {
      let aVal = a[sortField];
      let bVal = b[sortField];

      if (sortField === "Timestamp") {
        aVal = new Date(aVal).getTime().toString();
        bVal = new Date(bVal).getTime().toString();
      }

      if (sortOrder === "asc") {
        return aVal > bVal ? 1 : -1;
      } else {
        return aVal < bVal ? 1 : -1;
      }
    });

    setFilteredLeads(result);
  }, [leads, searchQuery, sortField, sortOrder, budgetFilter]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (password === "jupho2025") {
      setIsAuthenticated(true);
      localStorage.setItem('adminPassword', password); // Save session
      fetchLeads(password);
    } else {
      setError("Invalid password");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setLeads([]);
    setPassword("");
    localStorage.removeItem('adminPassword'); // Clear session
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files && e.target.files[0];
    if (f) setUploadFile(f);
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadFile) return alert('Please select a file');
    setUploading(true);

    const cloudName = 'dzbscdr3f';
    const uploadPreset = 'jupho-ads';

    try {
      // Upload to Cloudinary
      const fd = new FormData();
      fd.append('file', uploadFile);
      fd.append('upload_preset', uploadPreset);
      fd.append('folder', 'ads');

      const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`, {
        method: 'POST',
        body: fd,
      });

      const data = await res.json();
      if (!data || !data.secure_url) throw new Error('Cloudinary upload failed');

      // Save to localStorage (temporary solution for serverless)
      const newResult = {
        id: Date.now().toString(),
        imageUrl: data.secure_url,
        clientName: clientNameUpload || '',
        campaign: campaignUpload || '',
        metric: metricUpload || '',
        caption: captionUpload || '',
        date: new Date().toISOString(),
      };

      const savedResults = localStorage.getItem('uploadedResults');
      const results = savedResults ? JSON.parse(savedResults) : [];
      results.unshift(newResult);
      localStorage.setItem('uploadedResults', JSON.stringify(results));

      // Notify results page of new upload
      window.dispatchEvent(new CustomEvent('newResultUploaded', { detail: newResult }));

      alert('Upload successful! ✅\nImage uploaded to Cloudinary.');
      
      // Reset form
      setUploadFile(null);
      setClientNameUpload('');
      setCampaignUpload('');
      setMetricUpload('');
      setCaptionUpload('');
      
      // Clear file input
      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
      
    } catch (err: any) {
      alert('Error: ' + (err.message || 'Upload failed'));
    } finally {
      setUploading(false);
    }
  };

  const fetchLeads = async (pwd: string) => {
    setLoading(true);
    setError("");
    
    try {
      const res = await fetch("/api/admin/leads", {
        headers: {
          Authorization: `Bearer ${pwd}`,
        },
      });

      if (!res.ok) {
        throw new Error("Failed to fetch leads");
      }

      const data = await res.json();
      if (data.success && data.leads) {
        setLeads(data.leads);
      } else {
        throw new Error("Invalid response format");
      }
    } catch (err: any) {
      setError(err.message || "Failed to load leads");
    } finally {
      setLoading(false);
    }
  };

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const exportToCSV = () => {
    const headers = ["Date", "Name", "Email", "Phone", "Website", "Budget", "Message"];
    const csvData = filteredLeads.map(lead => [
      new Date(lead.Timestamp).toLocaleString(),
      lead.Name,
      lead.Email,
      lead.Phone,
      lead.Website,
      lead["Monthly Spend"],
      lead.Message.replace(/,/g, ";")
    ]);

    const csv = [
      headers.join(","),
      ...csvData.map(row => row.join(","))
    ].join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `leads_${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getLeadsByPeriod = (days: number) => {
    const date = new Date();
    date.setDate(date.getDate() - days);
    return leads.filter(lead => new Date(lead.Timestamp) >= date).length;
  };

  const getBudgetBreakdown = () => {
    const breakdown: { [key: string]: number } = {};
    leads.forEach(lead => {
      const budget = lead["Monthly Spend"];
      breakdown[budget] = (breakdown[budget] || 0) + 1;
    });
    return breakdown;
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#00b67a] to-[#009966] rounded-full mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Access</h1>
            <p className="text-gray-600">Enter password to view dashboard</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00b67a] focus:border-transparent"
                placeholder="Enter admin password"
                required
              />
            </div>

            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded">
                <p className="text-sm font-medium">{error}</p>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#00b67a] to-[#009966] text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">Lead Dashboard</h1>
              <p className="text-gray-300 text-sm mt-1">Manage your incoming leads</p>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto flex-wrap">
              <a
                href="/results"
                target="_blank"
                className="flex-1 sm:flex-initial bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                View Results
              </a>
              <button
                onClick={exportToCSV}
                className="flex-1 sm:flex-initial bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Export
              </button>
              <button
                onClick={() => fetchLeads(password)}
                className="flex-1 sm:flex-initial bg-[#00b67a] hover:bg-[#009966] px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Refresh
              </button>
              <button
                onClick={handleLogout}
                className="hidden sm:block bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg font-medium transition-colors text-sm"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Upload Results */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Upload Client Result</h3>
          <form onSubmit={handleUpload} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Screenshot</label>
              <input type="file" accept="image/*" onChange={handleFileChange} />
            </div>

            <div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Client name</label>
                <input value={clientNameUpload} onChange={(e) => setClientNameUpload(e.target.value)} className="w-full px-3 py-2 border rounded" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Campaign</label>
                <input value={campaignUpload} onChange={(e) => setCampaignUpload(e.target.value)} className="w-full px-3 py-2 border rounded" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Metric (e.g. CPL: $5)</label>
                <input value={metricUpload} onChange={(e) => setMetricUpload(e.target.value)} className="w-full px-3 py-2 border rounded" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Caption</label>
                <input value={captionUpload} onChange={(e) => setCaptionUpload(e.target.value)} className="w-full px-3 py-2 border rounded" />
              </div>
            </div>

            <div className="sm:col-span-3 flex items-center gap-3 mt-2">
              <button type="submit" disabled={uploading} className="bg-[#00b67a] text-white px-4 py-2 rounded hover:bg-[#009966]">
                {uploading ? 'Uploading...' : 'Upload Result'}
              </button>
              <p className="text-sm text-gray-500">Images are uploaded to Cloudinary. Make sure `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` and `NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET` are set.</p>
            </div>
          </form>
        </div>
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-xl shadow-md p-5 border-l-4 border-[#00b67a]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-xs font-medium uppercase">Total Leads</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">{leads.length}</p>
              </div>
              <div className="bg-green-100 rounded-full p-3">
                <svg className="w-6 h-6 text-[#00b67a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-5 border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-xs font-medium uppercase">Today</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">{getLeadsByPeriod(1)}</p>
              </div>
              <div className="bg-blue-100 rounded-full p-3">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-5 border-l-4 border-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-xs font-medium uppercase">This Week</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">{getLeadsByPeriod(7)}</p>
              </div>
              <div className="bg-purple-100 rounded-full p-3">
                <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-5 border-l-4 border-orange-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-xs font-medium uppercase">This Month</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">{getLeadsByPeriod(30)}</p>
              </div>
              <div className="bg-orange-100 rounded-full p-3">
                <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Budget Breakdown */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Budget Breakdown</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {Object.entries(getBudgetBreakdown()).map(([budget, count]) => (
              <div key={budget} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 text-center border border-gray-200">
                <p className="text-2xl font-bold text-gray-900">{count}</p>
                <p className="text-xs text-gray-600 mt-1">{budget}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-md p-4 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by name, email, phone, or budget..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00b67a] focus:border-transparent"
                />
                <svg className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            <select
              value={budgetFilter}
              onChange={(e) => setBudgetFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00b67a] focus:border-transparent"
            >
              <option value="all">All Budgets</option>
              {Array.from(new Set(leads.map(l => l["Monthly Spend"]))).map(budget => (
                <option key={budget} value={budget}>{budget}</option>
              ))}
            </select>
          </div>
          <div className="mt-3 text-sm text-gray-600">
            Showing <span className="font-semibold text-gray-900">{filteredLeads.length}</span> of <span className="font-semibold text-gray-900">{leads.length}</span> leads
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="flex flex-col items-center gap-4">
                <svg className="animate-spin h-12 w-12 text-[#00b67a]" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <p className="text-gray-600 font-medium">Loading leads...</p>
              </div>
            </div>
          ) : error ? (
            <div className="flex items-center justify-center py-20">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <p className="text-red-600 font-semibold mb-2">{error}</p>
                <button
                  onClick={() => fetchLeads(password)}
                  className="text-[#00b67a] hover:text-[#009966] font-medium"
                >
                  Try again
                </button>
              </div>
            </div>
          ) : filteredLeads.length === 0 ? (
            <div className="flex items-center justify-center py-20">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                </div>
                <p className="text-gray-600 font-medium">No leads found</p>
                <p className="text-gray-400 text-sm mt-1">Try adjusting your search or filters</p>
              </div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th onClick={() => handleSort("Timestamp")} className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors">
                      <div className="flex items-center gap-2">
                        Date
                        {sortField === "Timestamp" && (
                          <svg className={`w-4 h-4 transform ${sortOrder === "desc" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                          </svg>
                        )}
                      </div>
                    </th>
                    <th onClick={() => handleSort("Name")} className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors">
                      <div className="flex items-center gap-2">
                        Name
                        {sortField === "Name" && (
                          <svg className={`w-4 h-4 transform ${sortOrder === "desc" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                          </svg>
                        )}
                      </div>
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Contact
                    </th>
                    <th onClick={() => handleSort("Monthly Spend")} className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors">
                      <div className="flex items-center gap-2">
                        Budget
                        {sortField === "Monthly Spend" && (
                          <svg className={`w-4 h-4 transform ${sortOrder === "desc" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                          </svg>
                        )}
                      </div>
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {filteredLeads.map((lead, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatDate(lead.Timestamp)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{lead.Name}</div>
                        {lead.Website && (
                          <a
                            href={lead.Website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-blue-600 hover:text-blue-800 flex items-center gap-1 mt-1"
                          >
                            {lead.Website.substring(0, 30)}...
                          </a>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <a href={`mailto:${lead.Email}`} className="text-sm text-blue-600 hover:text-blue-800 block">
                          {lead.Email}
                        </a>
                        {lead.Phone && (
                          <a href={`tel:${lead.Phone}`} className="text-sm text-gray-600 hover:text-[#00b67a] block mt-1">
                            {lead.Phone}
                          </a>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {lead["Monthly Spend"]}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <button
                          onClick={() => {
                            setSelectedLead(lead);
                            setShowModal(true);
                          }}
                          className="text-[#00b67a] hover:text-[#009966] font-medium flex items-center gap-1"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {showModal && selectedLead && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={() => setShowModal(false)}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="bg-gradient-to-r from-[#00b67a] to-[#009966] text-white p-6 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">{selectedLead.Name}</h2>
                  <p className="text-green-100 text-sm mt-1">{formatDate(selectedLead.Timestamp)}</p>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Email</p>
                  <a href={`mailto:${selectedLead.Email}`} className="text-blue-600 hover:text-blue-800 font-medium break-all">
                    {selectedLead.Email}
                  </a>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Phone</p>
                  {selectedLead.Phone ? (
                    <a href={`tel:${selectedLead.Phone}`} className="text-[#00b67a] hover:text-[#009966] font-medium">
                      {selectedLead.Phone}
                    </a>
                  ) : (
                    <span className="text-gray-400">Not provided</span>
                  )}
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Budget</p>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    {selectedLead["Monthly Spend"]}
                  </span>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Website</p>
                  {selectedLead.Website ? (
                    <a
                      href={selectedLead.Website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1 break-all"
                    >
                      {selectedLead.Website}
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ) : (
                    <span className="text-gray-400">Not provided</span>
                  )}
                </div>
              </div>

              {selectedLead.Message && (
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-xs text-gray-500 uppercase font-semibold mb-2">Message</p>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{selectedLead.Message}</p>
                </div>
              )}

              <div className="flex gap-3 pt-4 border-t">
                <a
                  href={`mailto:${selectedLead.Email}`}
                  className="flex-1 bg-[#00b67a] hover:bg-[#009966] text-white py-3 rounded-lg font-semibold text-center transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Lead
                </a>
                {selectedLead.Phone && (
                  <a
                    href={`tel:${selectedLead.Phone}`}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold text-center transition-colors flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Lead
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
