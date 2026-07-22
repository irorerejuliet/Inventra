"use client";

import { useState } from "react";
import Label from "@/components/ui/Label";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Link from "next/link";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { loginSchema, LoginSchema } from "@/schemas/auth.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { login } from "@/services/auth";
import Image from "next/image";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });


  const auth = useContext(AuthContext);

  if (!auth) {
    throw new Error("AuthContext must be used inside AuthProvider");
  }
  const { setUser, setToken } = auth;

  
  const onSubmit = async (data: LoginSchema) => {
    try {
      const response = await login(data);

      const { user, token } = response.data;

      setUser(user);
      setToken(token);

      console.log("Login successful");

      router.push("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-4">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/login-bg.jpg"
          alt="Background"
          width={30}
          height={30}
          className="h-full w-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-slate-950/75" />
      </div>

      {/* Ambient Lights */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-500/30 blur-[150px]" />
      <div className="absolute top-1/2 -right-40 h-96 w-96 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-[150px]" />
      <div className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-indigo-500/20 blur-[150px]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size-70px_70px]" />

      {/* Radial Fade */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.25)_40%,rgba(2,6,23,0.95)_100%)]" />

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md animate-[fadeIn_.7s_ease]">
        <Card className="rounded-3xl border border-white/10 bg-white/90 backdrop-blur-xl shadow-[0_30px_80px_rgba(0,0,0,.35)]">
          <h1 className="text-4xl font-extrabold tracking-tight">
            Welcome back
          </h1>

          <p className="mt-3 text-muted">Sign in to your Inventra account.</p>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {/* Email */}
            <div>
              <Label htmlFor="email">Email</Label>

              <Input
                id="email"
                type="email"
                placeholder="juliet@example.com"
                className="mt-2"
                {...register("email")}
              />

              {errors.email && (
                <p className="mt-2 text-sm text-danger">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <Label htmlFor="password">Password</Label>

              <div className="relative mt-2">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="pr-12"
                  {...register("password")}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 transition-colors duration-200 hover:text-primary"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                </button>
              </div>

              {errors.password && (
                <p className="mt-2 text-sm text-danger">
                  {errors.password.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              loading={isSubmitting}
              className="h-12 rounded-xl font-semibold transition-transform duration-300 hover:-translate-y-0.5"
            >
              Sign In
            </Button>

            <p className="text-center text-sm text-muted">
              Don&apos;t have an account?{" "}
              <Link
                href="/signup"
                className="font-semibold text-primary transition hover:underline"
              >
                Create one
              </Link>
            </p>
          </form>
        </Card>
      </div>
    </div>
  );
}
