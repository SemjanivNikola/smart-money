const ScreenHeader = ({ title }: { title: string }) => {
    return (
        <div className="py-lg">
            <h1>{title}</h1>
            <div className="spacer-md" />
        </div>
    )
}

export default ScreenHeader;