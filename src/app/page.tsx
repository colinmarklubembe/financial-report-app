"use client";

import { useState, useEffect } from "react";
import { CSVLink } from "react-csv";

interface Report {
  transactionId: string;
  date: string;
  accountHolderName: string;
  transactionType: string;
  amount: number;
  accountBalance: number;
}

const ReportsPage = () => {
  const [reports, setReportsState] = useState<Report[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredReports, setFilteredReports] = useState<Report[]>([]);

  useEffect(() => {
    const fetchReports = async () => {
      const response = await fetch("/api/reports");
      const data: Report[] = await response.json();

      setReportsState(data);
      setFilteredReports(data);
    };

    fetchReports();
  }, []);

  useEffect(() => {
    const filtered = reports.filter(
      (report) =>
        report.transactionType
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        report.accountHolderName
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
    );
    setFilteredReports(filtered);
  }, [searchTerm, reports]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Financial Reports
        </h1>
        <div className="mb-4">
          <input
            type="text"
            className="w-full p-3 border rounded-lg text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search by Transaction Type or Account Holder"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <table className="min-w-full table-auto mt-6 border-collapse">
          <thead>
            <tr className="bg-blue-600 text-white text-sm font-semibold">
              <th className="px-6 py-4 border-b">Transaction ID</th>
              <th className="px-6 py-4 border-b">Date</th>
              <th className="px-6 py-4 border-b">Account Holder</th>
              <th className="px-6 py-4 border-b">Transaction Type</th>
              <th className="px-6 py-4 border-b">Amount</th>
              <th className="px-6 py-4 border-b">Account Balance</th>
            </tr>
          </thead>
          <tbody>
            {filteredReports.map((report, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-blue-50 transition-all text-sm text-black`}
              >
                <td className="px-6 py-4 border-b">{report.transactionId}</td>
                <td className="px-6 py-4 border-b">{report.date}</td>
                <td className="px-6 py-4 border-b">
                  {report.accountHolderName}
                </td>
                <td className="px-6 py-4 border-b">{report.transactionType}</td>
                <td className="px-6 py-4 border-b text-right">
                  {report.amount.toFixed(2)}
                </td>
                <td className="px-6 py-4 border-b text-right">
                  {report.accountBalance.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-6 text-right">
          <CSVLink
            data={filteredReports}
            filename={"financial-reports.csv"}
            className="inline-block bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Export to CSV
          </CSVLink>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;
