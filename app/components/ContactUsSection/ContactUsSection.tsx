import { useForm } from "react-hook-form";
import { Container, H2, P, Button, Input, Textarea } from "components";

import styles from "./contactUsSection.module.scss";

interface IForm {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export const ContactUsSection = () => {
  const { control, handleSubmit: validateBeforeSubmit } = useForm<IForm>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: ""
    }
  });

  const handleSubmit = async ({ name, email, phone, message }: IForm) => {
    console.log(name, email, message, phone);
    const res = await fetch("api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, phone, message })
    });

    if (res.ok) {
      const responseJson = await res.json();
      console.log(responseJson);
    } else {
      console.log("Error sending email");
    }
  };

  return (
    <Container>
      <section id="contact-us" className={styles.component}>
        <div className={styles.contentWrapper}>
          <H2 className={styles.title}>Interested in working together?</H2>
          <P className={styles.subtitle}>Contact us and let&apos;s talk about how we can support your innovation journey! Our team is happy to answer your questions.</P>
          <form action="POST" onSubmit={validateBeforeSubmit(handleSubmit)} className={styles.form}>
            <div className={styles.container}>
              <div className={styles.inputWrapper}>
                <Input
                  name="name"
                  placeholder="Name"
                  control={control}
                  rules={{
                    required: "Name field is required",
                    minLength: {
                      value: 4,
                      message: "Name must contain at least 4 characters"
                    }
                  }}
                />
                <Input
                  name="email"
                  placeholder="E-mail"
                  control={control}
                  rules={{
                    required: "Email field is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Please enter a valid email address"
                    }
                  }}
                />
                <Input
                  name="phone"
                  placeholder="Phone number"
                  control={control}
                  rules={{
                    pattern: {
                      value: /^\+?[0-9]+$/,
                      message: "Please enter a valid phone number"
                    }
                  }}
                />
              </div>
              <div className={styles.textareaWrapper}>
                <Textarea
                  name="message"
                  placeholder="Message"
                  control={control}
                  rules={{
                    minLength: {
                      value: 0,
                      message: "The message must contain at least 10 characters"
                    },
                    maxLength: {
                      value: 200,
                      message: "The message must contain no more than 200 characters"
                    }
                  }}
                />
              </div>
            </div>
            <Button
              size="m"
              type="submit"
            >
              Get in touch
            </Button>
          </form>
        </div>
      </section>
    </Container>
  );
};
