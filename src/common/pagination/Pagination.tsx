import Icon from "../icon/Icon";

const Pagination = () => {
    return (
        <div className="f row a-c j-sb px-m py-m">
            <div className="f row a-c gap-s">
                <Icon name="account" color="var(--black)" />
                <small>Previous</small>
            </div>
            <div className="f row gap-m">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>...</span>
                <span>7</span>
                <span>8</span>
                <span>9</span>
            </div>
            <div className="f row a-c gap-s">
                <small>Next</small>
                <Icon name="account" color="var(--black)" />
            </div>
        </div>
    )
}

export default Pagination;