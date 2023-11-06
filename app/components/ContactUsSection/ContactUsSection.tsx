import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { Container, H2, P, Button, Input, Textarea } from "components";
import { useContentfulData } from "hooks";
import { GetQueries } from "data";

import styles from "./contactUsSection.module.scss";

interface IForm {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type Item = {
  title: string;
  subtitle: string;
  button: string;
  name: string;
  phoneNumber: string;
  message: string;
}

type TProps = {
  items: Item[];
}

export const ContactUsSection = () => {
  const { contactUs } = GetQueries();
  const data = useContentfulData<TProps>("contactUsCollection", contactUs);
  const isValidData = data?.items && data.items.length > 0;
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

      return toast.success(<P>Emails was send!</P>, {style: {backgroundColor: "#E7E7E7", padding: "12px 20px", color: '#000000', borderRadius: "40px", textAlign: "center"}});
    } else {
      console.log("Error sending email");
    }
  };

  return (
    <Container>
      {
        isValidData &&
        <section id="contact-us" className={styles.component}>
          <div className={styles.contentWrapper}>
            <H2 className={styles.title}>{data.items[0].title}</H2>
            <P className={styles.subtitle}>{data.items[0].subtitle}</P>
            <form action="POST" onSubmit={validateBeforeSubmit(handleSubmit)} className={styles.form}>
              <div className={styles.container}>
                <div className={styles.inputWrapper}>
                  <Input
                    name="name"
                    placeholder={data.items[0].name}
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
                    placeholder={data.items[0].phoneNumber}
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
                    placeholder={data.items[0].message}
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
                {data.items[0].button}
              </Button>
              <Toaster />
            </form>
          </div>
        </section>
      }
    </Container>
  );
};
