import { useEffect, useState } from "react";
import { findTags } from "../services/TagsService";
import TagsList from "../components/tags/TagsList";
import TagsForm from "../components/forms/tags/TagsForm";
import CreateTagForm from "../components/forms/tags/CreateTagForm";

const TagsPage = () => {
    // LIST
    const [tags, setTags] = useState([]);
    
    const getTags = async () => {
        const response = await findTags();
        if (response) {
            setTags(response);
        }
    }

    useEffect(() => {
        getTags();
    }, []);
    
    // EDIT
    const [selectedTag, setSelectedTag] = useState(null);
    const [modal, setModal] = useState(false);
    const selectTag = (tag) => {
        setSelectedTag(tag);
        setModal(true);
    }

    const closeModal = () => {
        setSelectedTag(null);
        setModal(false);
    }

    const openCreation = () => {
        setSelectedTag(null);
        setModal(true);
    }

    const refreshTags = () => {
        getTags();
    }

    return (
        <>
            <dialog open={modal} id="modal_edit" className="modal text-white">
                <div className={"modal-box text-primary"}>
                    <button onClick={() => setModal(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <span className="font-bold text-lg">Gestion du tag</span>
                    
                    {
                        selectedTag
                        ? <TagsForm tag={selectedTag} closeModal={closeModal} refreshTags={refreshTags}/>
                        : <CreateTagForm closeModal={closeModal} refreshTags={refreshTags}/>
                    }
                </div>

                <form method="dialog" className="modal-backdrop blur">
                    <button onClick={closeModal}>close</button>
                </form>
            </dialog>

            <div className="flex justify-between">
                <h1 className="text-2xl">Tags</h1>
                <button className="btn btn-primary" onClick={openCreation}>Créer un tag</button>
            </div>

            <TagsList tags={tags} selectTag={selectTag} refreshTags={refreshTags}/>
        </>
    );
}

export default TagsPage;