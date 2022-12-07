// Отрефакторь этот компонент чтобы он принимал массив из тегов и отображал их на экране

function Tags({ tags }) {
    return (
        <div className="w3-card w3-margin">
            <div className="w3-container w3-padding">
                <h4>Tags</h4>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', padding: '10px' }} className="w3-container w3-white">
                {tags.map(tag => (
                    <span key={tag} className="w3-tag w3-light-grey w3-small w3-margin-bottom">{tag}</span>
                ))}
            </div>
        </div>
    );
}
export default Tags