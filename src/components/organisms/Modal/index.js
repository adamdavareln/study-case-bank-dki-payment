import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import useTouchOutside from "@/helpers/hooks/useTouchOutside";
import { cn } from "@/services/cn";

const Modal = ({
	children,
	visible = false,
	onClose,
	overlayClassName,
	containerClassName,
	bodyClassName,
}) => {
	const modalRef = useRef(null);

	useEffect(() => {
		if (visible) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}

		return () => {
			document.body.style.overflow = "unset";
		};
	}, [visible]);

	useTouchOutside(modalRef, () => onClose());

	return (
		visible &&
		createPortal(
			<div
				className={cn(
					"fixed inset-0 z-50 flex items-center justify-center bg-white/50 transition-opacity duration-300 ease-in-out",
					visible ? "opacity-100" : "opacity-0",
					overlayClassName
				)}
			>
				<div
					className={cn(
						"max-h-[calc(100vh-64px)] w-auto  max-w-[90vw] overflow-y-auto rounded-lg border border-neutral5 bg-white text-base shadow-md transition-all duration-300 ease-in-out",
						visible ? "scale-100 opacity-100" : "scale-95 opacity-0",
						containerClassName
					)}
					ref={modalRef}
				>
					<div className={cn("break-all p-6", bodyClassName)}>{children}</div>
				</div>
			</div>,
			document.body
		)
	);
};

Modal.propTypes = {
	children: PropTypes.node,
	visible: PropTypes.bool,
	onClose: PropTypes.func.isRequired,
	overlayClassName: PropTypes.string,
	bodyClassName: PropTypes.string,
};

export default Modal;
