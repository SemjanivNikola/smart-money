import Icon from "@/src/common/icon/Icon";
import { IconName } from "@/src/common/icon/IconType";
import Link from "next/link";

const QuickActionLink = ({ text, url, icon }: { text: string; url: string; icon: IconName }) => {
  return (
    <Link
      href={url}
      className="quick-action-link f col a-c gap-lg px-m"
      style={{ borderRadius: "var(--border-radius-s)" }}
    >
      <div className="icon-bg f a-c j-c">
        <Icon name="plus" />
      </div>
      <p>{text}</p>
    </Link>
  );
};

export default QuickActionLink;
