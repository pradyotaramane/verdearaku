import { useState } from "react";
import { MessageCircle, X, Send, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const categories = [
  { id: "consulting", label: "Consulting" },
  { id: "partnerships", label: "Partnerships" },
  { id: "fnb", label: "F&B Products" },
  { id: "gym", label: "AI Gym Equipment" },
  { id: "coffee", label: "Coffee Beans" },
  { id: "other", label: "Other" },
];

type Step = "category" | "details" | "message" | "success";

export function QuickBot() {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<Step>("category");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    category: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleCategorySelect = (categoryId: string) => {
    setFormData({ ...formData, category: categoryId });
    setStep("details");
  };

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setStep("message");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.message.trim()) return;

    setLoading(true);
    try {
      const categoryLabel = categories.find(c => c.id === formData.category)?.label || formData.category;
      
      const { error } = await supabase.functions.invoke("send-enquiry", {
        body: {
          type: "bot",
          category: categoryLabel,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          pageUrl: window.location.href,
        },
      });

      if (error) throw error;

      setStep("success");
    } catch (error) {
      console.error("Error sending bot enquiry:", error);
      toast({
        title: "Failed to send",
        description: "Please try again or email support@verdearaku.com",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const resetBot = () => {
    setFormData({ category: "", name: "", email: "", phone: "", message: "" });
    setStep("category");
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(resetBot, 300);
  };

  const goBack = () => {
    if (step === "details") setStep("category");
    else if (step === "message") setStep("details");
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-strong hover:shadow-glow transition-all duration-300 flex items-center justify-center hover:scale-105 ${
          isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
        }`}
        aria-label="Ask Verde"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Chat Widget */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-[90vw] max-w-[360px] bg-card rounded-2xl shadow-strong border border-border overflow-hidden transition-all duration-300 ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-4 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {step !== "category" && step !== "success" && (
              <button onClick={goBack} className="p-1 hover:bg-primary-foreground/10 rounded">
                <ChevronLeft className="h-5 w-5" />
              </button>
            )}
            <div>
              <h3 className="font-serif font-semibold">Ask Verde</h3>
              <p className="text-xs text-primary-foreground/70">
                {step === "category" && "How can we help?"}
                {step === "details" && "Your details"}
                {step === "message" && "Your message"}
                {step === "success" && "Message sent!"}
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-1 hover:bg-primary-foreground/10 rounded"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 max-h-[60vh] overflow-y-auto">
          {step === "category" && (
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground mb-4">
                What do you need help with?
              </p>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategorySelect(cat.id)}
                  className="w-full text-left px-4 py-3 rounded-lg bg-secondary hover:bg-muted transition-colors text-foreground font-medium"
                >
                  {cat.label}
                </button>
              ))}
            </div>
          )}

          {step === "details" && (
            <form onSubmit={handleDetailsSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Name *</label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email *</label>
                <Input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Phone (optional)</label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              <Button type="submit" variant="premium" className="w-full">
                Continue
              </Button>
            </form>
          )}

          {step === "message" && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Describe your requirement</label>
                <Textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us what you're looking for..."
                />
              </div>
              <Button
                type="submit"
                variant="premium"
                className="w-full"
                disabled={loading}
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    Send <Send className="h-4 w-4 ml-1" />
                  </>
                )}
              </Button>
            </form>
          )}

          {step === "success" && (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-serif font-semibold text-lg mb-2">Thank you!</h4>
              <p className="text-muted-foreground text-sm mb-6">
                We've received your message and will get back to you within 1 business day.
              </p>
              <Button variant="subtle" onClick={handleClose}>
                Close
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
