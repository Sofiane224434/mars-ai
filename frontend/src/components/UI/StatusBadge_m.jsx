import icon_valid_m from "../../assets/icons/icon_valid_m.png";
import icon_refuse_m from "../../assets/icons/icon_refuse_m.png";
import icon_review_m from "../../assets/icons/icon_review_m.png";

export const Status_mobile = ({
  variant = "attente",
  children = "Status",
  className = "",
}) => {
  // Styles de base communs à tous les boutons
  const baseStyles =
    "flex flex-col w-[97px] h-10 items-center jutstify-center gap-0.5 relative bg-color-background-positive-default rounded-3xl overflow-hidden border-[5px] border-solid border-transparent";

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
            src={icon_refuse_m}
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
            src={icon_valid_m}
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
            src={icon_review_m}
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


export const Valider = () => {
    return (
        <div className="flex flex-col w-[97px] h-10 items-center jutstify-center gap-0.5 relative bg-color-background-positive-default rounded-3xl overflow-hidden border-[5px] border-solid border-transparent">
            <div className="flex h-10 items-center justify-center gap-2 p-2.5 relative self-stretch w-full rounded-3xl overflow-hidden">
                <icon className="!relative !w-[26.9px] !h-[29.58px] !mb-[-9.58px]" />
            </div>
        </div>
    )
}