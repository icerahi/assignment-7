"use client";
import { updateExperience } from "@/actions/experience.actions";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
 import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

const ExperienceEditFormSchema = z.object({
  company: z.string().min(2, {
    message: "Company name must be at least 2 characters.",
  }),
  position: z.string().min(2, {
    message: "Position must be at least 2 characters.",
  }),
  startDate: z.date(),
  endDate: z.date().optional(),
});

type ExperienceEditFormValues = z.infer<typeof ExperienceEditFormSchema>;

export default function ExperienceEditForm({
  experience,
}: {
  experience: any;
}) {
  const [isPresent, setIsPresent] = useState(
    experience?.endDate ? false : true
  );

  const router = useRouter();
  const form = useForm<ExperienceEditFormValues>({
    resolver: zodResolver(ExperienceEditFormSchema),
    defaultValues: {
      company: experience?.company,
      position: experience?.position,
      startDate: new Date(experience?.startDate),
      endDate: new Date(experience?.endDate),
    },
  });

  async function onSubmit(data: ExperienceEditFormValues) {
    const payload = {
      ...data,
      endDate: isPresent ? null : data.endDate,
    };

    const toastId = toast.loading("Updating...");
    try {
      const res = await updateExperience(experience?.id, payload);

      if (res.success) {
        toast.success(res.message, { id: toastId });
        router.push("/dashboard/experiences");
      } else {
        toast.error(res.message ?? "Something went wrong!", { id: toastId });
      }
    } catch (err) {}
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="position"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Position" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company</FormLabel>
              <FormControl>
                <Input placeholder="Company" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="startDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Start Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Start Date</span>
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
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    captionLayout="dropdown"
                  />
                </PopoverContent>
              </Popover>

              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-2 items-center">
          <Checkbox
            checked={isPresent}
            onClick={() => setIsPresent(!isPresent)}
          />{" "}
          <span className="text-sm"> I still work here</span>
        </div>
        {!isPresent && (
          <FormField
            control={form.control}
            name="endDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>End Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>End Date</span>
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
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      captionLayout="dropdown"
                    />
                  </PopoverContent>
                </Popover>

                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <div className="flex justify-end items-center gap-2">
          <Button
            type="button"
            onClick={() => router.back()}
            variant={"secondary"}
          >
            Cancel
          </Button>
          <Button type="submit">Save Changes </Button>
        </div>
      </form>
    </Form>
  );
}
