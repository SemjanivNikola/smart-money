import Icon from "../icon/Icon";
import s from "./dropdown-area.module.css"

type DropdownAreaProps = {}

const DropdownArea = ({ }: DropdownAreaProps) => {
    return (
        <div className={s.box} onClick={() => document.getElementById("file")?.click()}>
            <div className={s.boxWrapper}>
                <Icon name="cloud-upload" color="var(--secondary)" size={120} />
                <input className={s.boxHidden} type="file" name="files[]" id="file" data-multiple-caption="{count} files selected" multiple />
                <label><strong>Choose a file</strong><span className={s.lDragndrop}> or drag it here</span></label>
                <button className={s.boxHidden} type="submit">Upload</button>
            </div>
            <div className={s.lUploading}>Uploading…</div>
            <div className={s.lSuccess}>Done!</div>
            <div className={s.lError}>Error!</div>
        </div >
    )
}

export default DropdownArea;