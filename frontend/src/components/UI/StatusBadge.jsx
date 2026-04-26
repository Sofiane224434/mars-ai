import icon_valid from "../../assets/icons/icon_valid.png";
import icon_refuse from "../../assets/icons/icon_refuse.png";
import icon_review from "../../assets/icons/icon_review.png";
import icon_wait from "../../assets/icons/icon_wait.png";

export const Status = ({
  variant = "attente",
  children = "Status",
  className = "",
}) => {
  // Styles de base communs à tous les boutons
  const baseStyles =
    "flex items-center gap-1.0 px-3.5 py-1 rounded-full border border-solid w-fit h-fit transition-all";

  // Variant 1 : refusé (Rouge)
  const variants = {
    refuse: {
      container: "bg-[#ff3434] border-[#6d151] text-[#6d1515]",
      icon: "",
      bg: (
        <div>
          <div className="relative flex items-center w-[18.2px] h-0 [font-family:'Inter-Medium',Helvetica] font-medium text-[#6d1515] text-xs tracking-[0] leading-4 whitespace-nowrap" />
          <img
            className="relative w-[11.65] h-[13.65px]"
            alt="Icon"
            src={icon_refuse}
          />
        </div>
      ),
    },

    // Variant 2 : validé

    valid: {
      container: "bg-[#34ff38] border-[#06ab2f] text-green-800",
      icon: "",
      bg: (
        <div>
          <div className="relative flex items-center w-[18.2px] h-0 [font-family:'Inter-Medium',Helvetica] font-medium text-green-800 text-xs tracking-[0] leading-4 whitespace-nowrap" />
          <img
            className="relative w-[11.65] h-[13.65px]"
            alt="Icon"
            src={icon_valid}
          />
        </div>
      ),
    },

    // Variant 3 : À revoir
    review: {
      container: "bg-[#ffe900] border-[#ff9d00] text-yellow-800",
      icon: "",
      bg: (
        <div>
          <div className="relative flex items-center w-[18.2px] h-0 [font-family:'Inter-Medium',Helvetica] font-medium text-yellow-800 text-xs tracking-[0] leading-4 whitespace-nowrap" />
          <img
            className="relative w-[11.65] h-[13.65px]"
            alt="Icon"
            src={icon_review}
          />
        </div>
      ),
    },

    // Variant 4 : En attente
    wait: {
      container: "bg-[#8f8f8f] border-solid border-white text-gray-800",
      icon: "",
      bg: (
        <div>
          <div className="relative flex items-center w-[18.2px] h-0 [font-family:'Inter-Medium',Helvetica] font-medium text-gray-800 text-xs tracking-[0] leading-4 whitespace-nowrap" />
          <img
            className="relative w-[11.65] h-[13.65px]"
            alt="Icon"
            src={icon_wait}
          />
        </div>
      ),
    },
  };

  const currentVariant = variants[variant] || variants.attente;

  return (
    <div className={`${baseStyles} ${currentVariant.container} ${className}`}>
      {/* Couche de fond (Background/Borders) */}
      {currentVariant.bg}

      {/* Contenu du texte */}
      <span className="relative z-10">{children}</span>
    </div>
  );
};
