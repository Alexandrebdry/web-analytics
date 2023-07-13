import { useEffect, useState } from "react";
import { findTags } from "../services/TagsService";
import TagsList from "../components/tags/TagsList";
import TagsForm from "../components/forms/tags/TagsForm";

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
        setSelectedUser(null);
        setModal(false);
    }

    return (
        <>
            <dialog open={modal} id="modal_edit" className="modal text-white">
                <div className={"modal-box text-primary"}>
                    <button onClick={() => setModal(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <span className="font-bold text-lg">Gestion du tag</span>
                    <TagsForm tag={selectedTag} closeModal={closeModal}/>
                </div>

                <form method="dialog" className="modal-backdrop blur">
                    <button onClick={closeModal}>close</button>
                </form>
            </dialog>

            <h1 className="text-2xl">Tags</h1>

            <TagsList tags={tags} selectTag={selectTag}/>
        </>
    );
}

export default TagsPage;