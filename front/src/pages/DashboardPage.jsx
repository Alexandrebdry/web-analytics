import { useEffect, useState } from "react";
import { findReports } from "../services/ReportsService";
import ReportsList from "../components/dashboard/ReportsList";

export default function DashboardPage() {
    const [reports, setReports] = useState([]);

    const getReports = async () => {
        const response = await findReports();
        if (response) {
            console.log(response);
            setReports(response);
        }
    }

    useEffect(() => {
        getReports();
    }, []);

    return (
        <>
            <h1 className="text-2xl">Dashboard</h1>

            <ReportsList reports={reports} />
        </>
    );
}