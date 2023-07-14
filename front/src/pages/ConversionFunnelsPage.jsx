import { useEffect, useState } from "react";
import { findFunnels } from "../services/ConversionFunnelsService";
import FunnelsList from "../components/funnels/FunnelsList";
import FunnelsForm from "../components/forms/funnels/FunnelsForm";
import CreateFunnelForm from "../components/forms/funnels/CreateFunnelForm";

const ConversionFunnelsPage = () => {
    // LIST
    const [conversionFunnels, setConversionFunnels] = useState([]);

    const getFunnels = async () => {
        const response = await findFunnels();
        if (response) {
            setConversionFunnels(response);
        }
    }

    useEffect(() => {
        getFunnels();
    }, []);
    
    // EDIT
    const [selectedFunnel, setSelectedFunnel] = useState(null);
    const [modal, setModal] = useState(false);
    const selectFunnel = (funnel) => {
        setSelectedFunnel(funnel);
        setModal(true);
    }

    const closeModal = () => {
        setSelectedFunnel(null);
        setModal(false);
    }

    const openCreation = () => {
        setSelectedFunnel(null);
        setModal(true);
    }

    const refreshFunnels = () => {
        getFunnels();
    }

    return (
        <>
            <dialog open={modal} id="modal_edit" className="modal text-white">
                <div className={"modal-box text-primary"}>
                    <button onClick={() => setModal(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <span className="font-bold text-lg">Gestion du tag</span>
                    
                    {
                        selectedFunnel
                        ? <FunnelsForm funnel={selectedFunnel} closeModal={closeModal} refreshFunnels={refreshFunnels}/>
                        : <CreateFunnelForm closeModal={closeModal} refreshFunnels={refreshFunnels}/>
                    }
                </div>

                <form method="dialog" className="modal-backdrop blur">
                    <button onClick={closeModal}>close</button>
                </form>
            </dialog>
            
            <div className="flex justify-between">
                <h1 className="text-2xl">Tunnels de conversion</h1>
                <button className="btn btn-primary" onClick={openCreation}>Créer un tunnel de conversion</button>
            </div>

            <FunnelsList
                funnels={conversionFunnels}
                selectFunnel={selectFunnel}
                refreshFunnels={refreshFunnels}
            />
        </>
    );
};

export default ConversionFunnelsPage;