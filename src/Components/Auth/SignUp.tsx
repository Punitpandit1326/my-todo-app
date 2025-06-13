import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Form,
} from "@heroui/react";
import { Input } from "@nextui-org/react";
import { Lock, Mail } from "lucide-react";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

interface CustomModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

type FormData = {
  email: string;
  password: string;
  confirmpassword: string;
};

export default function SignUp({ isOpen, onOpenChange }: CustomModalProps) {
  const {
    watch,
    register,
    handleSubmit,
    clearErrors,
    setError,
    reset,
    control,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex text-2xl gap-1 text-black dark:text-white">
                Login
              </ModalHeader>
              <ModalBody className="mb-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Controller
                    name="email"
                    control={control}
                    rules={{ required: "Email is Required" }}
                    render={({
                      field: { onChange, value },
                      fieldState: { invalid, error },
                    }) => (
                      <Input
                        startContent={
                          <Mail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                        }
                        className="mb-12"
                        size="lg"
                        value={value}
                        onChange={onChange}
                        radius="sm"
                        label="Email"
                        labelPlacement="outside"
                        isInvalid={invalid}
                        errorMessage={error?.message}
                      />
                    )}
                  />
                  <Controller
                    name="password"
                    control={control}
                    rules={{
                      required: "Password is required",
                      validate: (value) => {
                        if (value.length < 4) {
                          return "Password must be at least 4 characters";
                        }
                        if (!/[0-9]/.test(value)) {
                          return "Password must include at least one number";
                        }
                        if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
                          return "Password must include at least one special character";
                        }
                        return true;
                      },
                    }}
                    render={({
                      field: { onChange, value },
                      fieldState: { invalid, error },
                    }) => (
                      <Input
                        startContent={
                          <Lock className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                        }
                        size="lg"
                        value={value}
                        onChange={onChange}
                        radius="sm"
                        label="Password"
                        className="mb-12"
                        labelPlacement="outside"
                        isInvalid={invalid}
                        errorMessage={error?.message}
                      />
                    )}
                  />
                  <Controller
                    name="confirmpassword"
                    control={control}
                    rules={{
                      required: "Confirm Password is required",
                      validate: (value) => {
                        if (value.length < 4) {
                          return "Password must be at least 4 characters";
                        }
                        if (!/[0-9]/.test(value)) {
                          return "Password must include at least one number";
                        }
                        if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
                          return "Password must include at least one special character";
                        }
                        return true;
                      },
                    }}
                    render={({
                      field: { onChange, value },
                      fieldState: { invalid, error },
                    }) => (
                      <Input
                        startContent={
                          <Lock className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                        }
                        size="lg"
                        value={value}
                        onChange={onChange}
                        radius="sm"
                        label="Confirm Password"
                        labelPlacement="outside"
                        isInvalid={invalid}
                        errorMessage={error?.message}
                      />
                    )}
                  />

                  <div className="flex justify-end items-end gap-4 mt-5">
                    <Button color="primary" type="submit">
                      Submit
                    </Button>
                    <Button type="reset" variant="flat" onPress={() => reset()}>
                      Reset
                    </Button>
                  </div>
                </form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
