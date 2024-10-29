import MenuItem from "@/components/molecules/MenuItem";
import { cn } from "@/services/cn";
import PropTypes from "prop-types";

const PaymentMethodMenu = ({ menus = [], className = "" }) => {
	return (
		<div className={cn("flex flex-col", className)}>
			{menus.map((menu, index) => {
				return <MenuItem {...menu} key={`payment-method-menu-${index}`} />;
			})}
		</div>
	);
};

PaymentMethodMenu.propTypes = {
	menus: PropTypes.arrayOf(
		PropTypes.shape({
			description: PropTypes.string,
			label: PropTypes.string,
			icon: PropTypes.node,
			onClick: PropTypes.func,
		})
	),
	className: PropTypes.string,
};

export default PaymentMethodMenu;
