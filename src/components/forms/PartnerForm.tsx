import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";

const partnerTypes = [
  "Product Manufacturer",
  "Distributor",
  "Coffee Producer",
  "F&B Company",
  "Fitness Equipment",
  "Other",
];

export function PartnerForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    website: "",
    partnerType: "",
    productDescription: "",
    markets: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("send-enquiry", {
        body: {
          name: formData.contactName,
          email: formData.email,
          phone: formData.phone,
          company: formData.companyName,
          category: "Partnership Application",
          message: `
Partner Type: ${formData.partnerType}
Website: ${formData.website || "Not provided"}
Markets: ${formData.markets || "Not specified"}

Product/Service Description:
${formData.productDescription}

Additional Message:
${formData.message || "None"}
          `.trim(),
          source: "partner-form",
        },
      });

      if (error) throw error;

      toast({
        title: "Application Submitted!",
        description: "We'll review your partnership application and get back to you within 2 business days.",
      });

      setFormData({
        companyName: "",
        contactName: "",
        email: "",
        phone: "",
        website: "",
        partnerType: "",
        productDescription: "",
        markets: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting partner form:", error);
      toast({
        title: "Submission Error",
        description: "There was an issue submitting your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="companyName">Company Name *</Label>
          <Input
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
            placeholder="Your company name"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contactName">Contact Person *</Label>
          <Input
            id="contactName"
            name="contactName"
            value={formData.contactName}
            onChange={handleChange}
            required
            placeholder="Full name"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="you@company.com"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="website">Website</Label>
          <Input
            id="website"
            name="website"
            type="url"
            value={formData.website}
            onChange={handleChange}
            placeholder="https://yourcompany.com"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="partnerType">Partner Type *</Label>
          <Select
            value={formData.partnerType}
            onValueChange={(value) =>
              setFormData((prev) => ({ ...prev, partnerType: value }))
            }
            required
          >
            <SelectTrigger id="partnerType">
              <SelectValue placeholder="Select partner type" />
            </SelectTrigger>
            <SelectContent>
              {partnerTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="productDescription">Product/Service Description *</Label>
        <Textarea
          id="productDescription"
          name="productDescription"
          value={formData.productDescription}
          onChange={handleChange}
          required
          rows={4}
          placeholder="Describe your products or services..."
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="markets">Target Markets</Label>
        <Input
          id="markets"
          name="markets"
          value={formData.markets}
          onChange={handleChange}
          placeholder="e.g., India, Middle East, Southeast Asia"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Additional Message</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={3}
          placeholder="Any other information you'd like to share..."
        />
      </div>

      <Button
        type="submit"
        variant="premium"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            Submitting...
          </>
        ) : (
          "Submit Partnership Application"
        )}
      </Button>
    </form>
  );
}
