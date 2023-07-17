import { Container, H2, P, Button, Input, Textarea } from "components";

import styles from "./contactUsSection.module.scss";

export const ContactUsSection = () => {
  return (
    <Container>
      <section id="contact-us" className={styles.component}>
        <div className={styles.contentWrapper}>
          <H2 className={styles.title}>Interested in working together?</H2>
          <P className={styles.subtitle}>Contact us and let&apos;s talk about how we can support your innovation journey! Our team is happy to answer your questions.</P>
          <div className={styles.form}>
            <div className={styles.inputWrapper}>
              <Input
                name="name"
                placeholder="Name"
              />
              <Input
                name="email"
                placeholder="E-mail"
              />
              <Input
                name="phone"
                placeholder="Phone number"
              />
            </div>
            <div className={styles.textareaWrapper}>
              <Textarea
                name="message"
                placeholder="Message"
              />
            </div>
          </div>
          <Button
            size="m"
          >
            Get in touch
          </Button>
        </div>
      </section>
    </Container>
  );
};
