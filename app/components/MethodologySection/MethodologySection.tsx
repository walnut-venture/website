import { H2, MainContainer } from "components";
import { useTranslations } from "next-intl";

export const MethodologySection = () => {
  const t = useTranslations("Methodology");

  return (
    <MainContainer>
      <section>
        <H2>{t("mainTitle")}</H2>
      </section>
    </MainContainer>
  );
};
