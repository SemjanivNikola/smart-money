import Icon from "@/src/common/icon/Icon";
import { IconName } from "@/src/common/icon/IconType";
import Link from "next/link";

interface PaymentTypeItemProps {
  title: string;
  description: string;
  icon: IconName;
  href: string;
}

const PaymentTypeItem = ({ title, description, icon, href }: PaymentTypeItemProps) => {
  return (
    <Link href={href} className="pl-item f a-c gap-m">
      <div className="pl-item-icon f a-c j-c">
        <Icon name={icon} />
      </div>

      <div className="f col gap-s pl-item-content">
        <span>{title}</span>
        <p>{description}</p>
      </div>

      <div className="circle-wrapper f a-c j-c">
        <Icon name="chevron-right" size={32} color="var(--dark)" />
      </div>
    </Link>
  );
};

export default PaymentTypeItem;
