"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import { signUpAction } from "@/app/actions";

const schema = Yup.object({
  name: Yup.string().required("Tên không được để trống"),
  username: Yup.string()
    .required("Tên đăng nhập không được để trống")
    .min(5, "Tên đăng nhập phải có ít nhất 5 ký tự"),
  password: Yup.string()
    .required("Mật khẩu không được để trống")
    .min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
});

const SignUpForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const onSubmit = async (data: any) => {
    setLoading(true);
    await signUpAction(data);
    setLoading(false);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <Input
          label="Họ và tên"
          {...register("name")}
          placeholder="Nhập họ và tên"
          isRequired
          isInvalid={Boolean(errors.name)}
          errorMessage={errors.name?.message?.toString()}
        />
        <Input
          label="Tên đăng nhập"
          {...register("username")}
          placeholder="Nhập tên đăng nhập"
          isRequired
          isInvalid={Boolean(errors.username)}
          errorMessage={errors.username?.message?.toString()}
        />
        <Input
          label="Mật khẩu"
          {...register("password")}
          type="password"
          placeholder="Nhập mật khẩu"
          isRequired
          isInvalid={Boolean(errors.password)}
          errorMessage={errors.password?.message?.toString()}
        />
        <div className="flex gap-2 justify-end">
          <Button type="submit" color="primary" fullWidth isLoading={loading}>
            Đăng ký
          </Button>
        </div>
      </form>
    </>
  );
};

export default SignUpForm;
