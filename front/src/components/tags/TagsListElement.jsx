import { deleteTag } from "../../services/TagsService";

const TagsListElement = ({tag, selectTag}) => {
    const onClickDelete = () => {
        deleteTag(tag.id);
    }

    return (
        <tr>
            <th className="text-primary">{tag.id}</th>
            <td>{tag.comment}</td>
            <td className="flex gap-2">
                <button className="btn btn-primary" onClick={() => selectTag(tag)}>Editer</button>
                <button className="btn btn-warning" onClick={onClickDelete}>Supprimer</button>
            </td>
        </tr>
    );
};

export default TagsListElement;