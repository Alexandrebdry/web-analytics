import { useEffect, useState } from "react";
import { findReports } from "../services/ReportsService";
import ReportsList from "../components/reports/ReportsList";
import ReportsForm from "../components/forms/reports/ReportsForm";
import CreateReportForm from "../components/forms/reports/CreateReportForm";

const ReportsPage = () => {
    const [reports, setReports] = useState([]);
    
    const getReports = async () => {
        const response = await findReports();
        if (response) {
            setReports(response);
        }
    }

    useEffect(() => {
        getReports();
    }, []);
    
    // EDIT
    const [selectedReport, setSelectedReport] = useState(null);
    const [modal, setModal] = useState(false);
    const selectReport = (report) => {
        setSelectedReport(report);
        setModal(true);
    }

    const closeModal = () => {
        setSelectedReport(null);
        setModal(false);
    }

    const openCreation = () => {
        setSelectedReport(null);
        setModal(true);
    }

    const refreshReports = () => {
        getReports();
    }

    return (
        <>
            <dialog open={modal} id="modal_edit" className="modal text-white">
                <div className={"modal-box text-primary"}>
                    <button onClick={() => setModal(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <span className="font-bold text-lg">Gestion du report</span>
                    
                    {
                        selectedReport
                        ? <ReportsForm report={selectedReport} closeModal={closeModal} refreshReports={refreshReports}/>
                        : <CreateReportForm closeModal={closeModal} refreshReports={refreshReports}/>
                    }
                </div>

                <form method="dialog" className="modal-backdrop blur">
                    <button onClick={closeModal}>close</button>
                </form>
            </dialog>

            <div className="flex justify-between">
                <h1 className="text-2xl">Reports</h1>
                <button className="btn btn-primary" onClick={openCreation}>Créer un report</button>
            </div>

            <ReportsList reports={reports} selectReport={selectReport} refreshReports={refreshReports}/>
        </>
    );
}

export default ReportsPage;