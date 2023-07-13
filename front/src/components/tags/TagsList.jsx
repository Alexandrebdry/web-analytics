import TagsListElement from "./TagsListElement";

const TagsList = ({tags, selectTag}) => {
    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                <tr>
                    <th className="text-primary">Id</th>
                    <th>Commentaire</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                    {
                        tags
                        .sort((tagA, tagB) => tagA.id - tagB.id)
                        .map((tag) => {
                            return <TagsListElement key={tag.id} tag={tag} selectTag={selectTag}/>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default TagsList;