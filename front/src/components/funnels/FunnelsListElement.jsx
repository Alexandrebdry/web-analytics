import { deleteFunnel } from "../../services/ConversionFunnelsService";

const FunnelsListElement = ({funnel, selectFunnel, refreshFunnels}) => {
    const onClickDelete = async () => {
        await deleteFunnel(funnel.id);
        refreshFunnels();
    }

    return (
        <tr>
            <th className="text-primary">{funnel.id}</th>
            <td>{funnel.comment}</td>
            <td>
                {funnel.tags.map(tag => {
                    return <span key={tag.id} className="badge badge-primary">{tag.comment}</span>
                })}
            </td>
            <td className="flex gap-2">
                <button className="btn btn-primary" onClick={() => selectFunnel(funnel)}>Editer</button>
                <button className="btn btn-warning" onClick={onClickDelete}>Supprimer</button>
            </td>
        </tr>
    );
};

export default FunnelsListElement;