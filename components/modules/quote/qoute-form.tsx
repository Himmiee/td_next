"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { qouteFormSchema as formSchema } from "@/validators";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Countries, ProjectType } from "@/data";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon, ChevronsUpDown, Check } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { InputFile } from "@/components/custom/fileinput";
import CountrySelect from "@/components/custom/country-select";
import CustomPhonenumberInput from "@/components/custom/Inputs/CustomPhonenumberInput";

const QouteForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      country: "",
      project_type: "",
      estimated_budget: {
        amount: 0,
        currency: "USD",
      },
      desired_start_date: new Date(),
      attachment: null,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="max-w-[604px] mx-auto">
      <h4 className="mb-3 text-[24px] font-semibold">
        Contact you as soon as possible.
      </h4>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[16px]">Your name</FormLabel>
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

          {/* phone */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[16px]">Phone number</FormLabel>
                <CustomPhonenumberInput
                  value={field.value}
                  onChange={field.onChange}
                />
                <FormMessage />
              </FormItem>
            )}
          />

          {/* country select */}
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <CountrySelect
                  value={field.value}
                  onChange={(value) => field.onChange(value)}
                  countries={Countries} // Pass your countries array here
                />
                <FormMessage />
              </FormItem>
            )}
          />

          {/* project type */}
          <FormField
            control={form.control}
            name="project_type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project type</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="h-[46px]">
                      <SelectValue placeholder="Construction" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {ProjectType.map((project, index) => (
                      <SelectItem
                        className="cursor-pointer"
                        key={index}
                        value={project}
                      >
                        {project}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="estimated_budget"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Estimated Budget</FormLabel>
                <div className="flex items-center">
                  {/* Currency Selector */}
                  <Select
                    onValueChange={(value) =>
                      field.onChange({
                        ...field.value,
                        currency: value,
                      })
                    }
                    value={field.value?.currency || ""}
                  >
                    <FormControl>
                      <SelectTrigger className="h-[46px] w-[100px] mr-3">
                        <SelectValue placeholder="USD" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {["USD", "EUR", "GBP", "JPY"].map((currency, index) => (
                        <SelectItem
                          className="cursor-pointer"
                          key={index}
                          value={currency}
                        >
                          {currency}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  
                  {/* Amount Input */}
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="1000"
                      value={field.value?.amount || ""}
                      onChange={(e) =>
                        field.onChange({
                          ...field.value,
                          amount: parseFloat(e.target.value) || 0, // Ensure it's a number
                        })
                      }
                      className="h-[46px]"
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* desired start date */}
          <FormField
            control={form.control}
            name="desired_start_date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Desired Start Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "h-[46px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date < new Date() || date.getDay() === 0
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription>
                  Select a date when you want to start your project.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* attachment */}
          <FormField
            control={form.control}
            name="attachment"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Attachment</FormLabel>
                <InputFile onChange={field.onChange} Value={field.value} />
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full h-[52px] text-[16px] bg-[#2B2F84] hover:bg-[#282b69dc]"
          >
            REQUEST A QUOTE
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default QouteForm;
