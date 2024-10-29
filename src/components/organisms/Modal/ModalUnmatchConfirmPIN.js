import Button from "@/components/molecules/Button";
import Modal from ".";

const ModalUnmatchConfirmPIN = ({ visible, onClose }) => {
	return (
		<Modal
			containerClassName={"w-[252px] h-[234px]"}
			bodyClassName="h-full break-words"
			visible={visible}
			onClose={onClose}
		>
			<div className="flex h-full flex-col items-center">
				<div className="flex flex-1 text-md text-center break-words">
					PIN yang kamu masukkan TIDAK SESUAI
				</div>
				<div className="px-5 py-3 border-t border-border3 w-[182px]">
					<Button onClick={onClose}>Konfirmasi</Button>
				</div>
			</div>
		</Modal>
	);
};

export default ModalUnmatchConfirmPIN;
