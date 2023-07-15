import { useEffect, useState } from "react";
import { findReports } from "../services/ReportsService";

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

            
        </>
    );
}