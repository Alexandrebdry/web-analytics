import FunnelsListElement from "./FunnelsListElement";

const FunnelsList = ({funnels, selectFunnel, refreshFunnels}) => {
    return (
        <div className="overflow-x-auto mt-5">
            <table className="table">
                <thead>
                <tr>
                    <th className="text-primary">Id</th>
                    <th>Commentaire</th>
                    <th>Tags</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                    {
                        funnels
                        .sort((A, B) => A.id - B.id)
                        .map((funnel) => {
                            return <FunnelsListElement 
                                key={funnel.id} 
                                funnel={funnel} 
                                selectFunnel={selectFunnel}
                                refreshFunnels={refreshFunnels}
                            />
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default FunnelsList;