import "./Project.scss";

function Project({ title, text, img, tags, url }) {
    const tagArray = tags.split(" ");
    const tagList = tagArray.map(tag => <span key={tag} cx="tag">{tag}</span>);

    return (
        <div cx="project">
            <h2 cx="title">{title}</h2>
            <a href={url} target="_blank" rel="noopener noreferrer nofollow" cx="img-container">
                <img cx="img" src={img} alt="Превью проекта" />
            </a>
            <div cx="text">{text}</div>
            <div cx="tag-list">{tagList}</div>
        </div>
    );
}

Project.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};
export default Project;
