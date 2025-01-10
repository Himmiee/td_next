"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { contactFormSchema } from "@/validators";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { InputFile } from "@/components/custom/fileinput";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea"


const ContactForm = () => {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      document: null,
      message: "",
      agreement: false,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof contactFormSchema>) {
    console.log(values);
  }

  return (
    <div className="w-[604px] mx-auto">
      <h4 className="mb-3 text-[24px] font-semibold">Send us a message</h4>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[16px]">Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="John Doe"
                    {...field}
                    className="h-[46px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* phone */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[16px]">Phone number</FormLabel>
                <FormControl>
                  <Input
                    placeholder="+234 123 456 7890"
                    {...field}
                    className="h-[46px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[16px]">Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="infojohndoe@gmail.com"
                    {...field}
                    className="h-[46px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* document */}
          <FormField
            control={form.control}
            name="document"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Document</FormLabel>
                <InputFile onChange={field.onChange} Value={field.value} />
                <FormMessage />
              </FormItem>
            )}
          />

          {/* message */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[16px]">Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Type your message here..."
                    {...field}
                    className="h-[100px]"
                  />
                  
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Agreement */}
          <FormField
            control={form.control}
            name="agreement"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms2"
                    checked={field.value} // Bind to form's state
                    onCheckedChange={(checked) => field.onChange(checked)} // Update form state
                  />
                  <label
                    htmlFor="terms2"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    By continuing you agree to our <strong>Terms of Service and Privacy Policy.</strong>
                  </label>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full h-[52px] text-[16px] bg-[#2B2F84]"
          >
            SUBMIT
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
