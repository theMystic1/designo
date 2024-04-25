import styled from "styled-components";
import Headings from "../../ui/Headings";
import HeroSec from "../../ui/Hero";
import StyledParagraph from "../../ui/StyledParagraph";
import StyledButton from "../../ui/StyledButton";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useInview } from "../../hooks/useInview";

const Form = styled.form`
  display: inline-block;
`;

const FormRow = styled.span`
  position: relative;
  display: flex;
`;

const Input = styled.input`
  border: none;
  border-bottom: 0.1rem solid #f1f3f5;
  background-color: transparent;
  padding: 4rem 4rem 1rem 0.4rem;
  width: 100%;
  font-size: 1.6rem;
  &::placeholder {
    color: #ffffff;
    padding: 1rem;
  }

  &:focus {
    border-bottom: 0.3rem solid #ffffff;
  }
`;

function Error({ children, isError }) {
  return (
    <span className="flex gap-4 items-center absolute right-0 bottom-4 italic">
      {children}{" "}
      {isError ? (
        <img src="/assets/contact/desktop/icon-error.svg" alt="" />
      ) : null}
    </span>
  );
}

function ContactDetail() {
  const { register, handleSubmit, formState, reset } = useForm();

  const { errors } = formState;

  function onSubmit(data) {
    toast.success("Message successfully sent");
    console.log(data.message);
    reset();
  }
  const { ref, style } = useInview();

  return (
    <HeroSec
      className="text-white-200 flex flex-col lg:flex-row gap-8 p-20"
      ref={ref}
      style={style}
    >
      <div className="lg:w-1/2 flex flex-col justify-center gap-10 lg:px-20">
        <Headings>Contact us</Headings>
        <StyledParagraph>
          Contact us Ready to take it to the next level? Let’s talk about your
          project or idea and find out how we can help your business grow. If
          you are looking for unique digital experiences that’s relatable to
          your users, drop us a line.
        </StyledParagraph>
      </div>

      <Form
        className="flex flex-col gap-8 lg:w-1/2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormRow>
          <Input
            type="text"
            placeholder="Name"
            id="name"
            {...register("name", {
              required: "Can't be empty",
            })}
          />

          <Error isError={!!errors?.name}>{errors?.name?.message} </Error>
        </FormRow>

        <FormRow>
          <Input
            type="email"
            placeholder="Email address"
            id="email"
            {...register("email", {
              required: "Can't be empty",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please provide a valid email address",
              },
            })}
          />

          <Error isError={!!errors?.email}>{errors?.email?.message}</Error>
        </FormRow>

        <FormRow>
          <Input
            type="number"
            id="number"
            placeholder="Phone"
            {...register("number", {
              required: "Can't be empty",
              minLength: {
                value: 10,
                message: " Number should be  atlest 10",
              },
            })}
          />

          <Error isError={!!errors?.number}>{errors?.number?.message} </Error>
        </FormRow>

        <FormRow>
          <Input
            as="textarea"
            cols={"20"}
            rows={"5"}
            id="message"
            placeholder="Your message"
            {...register("message", {
              required: "Can't be empty",
            })}
          />

          <Error isError={!!errors?.message}>{errors?.message?.message}</Error>
        </FormRow>

        <FormRow className="w-full flex justify-center md:justify-end pt-8 pb-20 ">
          <StyledButton>Submit</StyledButton>
        </FormRow>
      </Form>
    </HeroSec>
  );
}

export default ContactDetail;
