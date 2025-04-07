
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, User, Calendar, Search, Globe } from "lucide-react";

const services = [
  {
    icon: <MessageSquare className="h-12 w-12 text-primary" />,
    title: "Customer Service Agents",
    description: "24/7 customer support that can answer questions, resolve issues, and escalate complex matters to human staff when necessary."
  },
  {
    icon: <Calendar className="h-12 w-12 text-primary" />,
    title: "Appointment Scheduling",
    description: "Intelligent scheduling assistants that manage your calendar, reduce no-shows, and send personalized reminders."
  },
  {
    icon: <User className="h-12 w-12 text-primary" />,
    title: "Lead Qualification",
    description: "AI agents that engage with new leads, ask qualifying questions, and route hot prospects to your sales team."
  },
  {
    icon: <Search className="h-12 w-12 text-primary" />,
    title: "Data Analysis",
    description: "Automated analysis of business metrics, customer feedback, and market trends to provide actionable insights."
  },
  {
    icon: <Globe className="h-12 w-12 text-primary" />,
    title: "Multi-platform Integration",
    description: "Seamless integration with your website, email, CRM, and communication tools like Slack."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-spacing bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our AI Agent Services</h2>
          <p className="text-xl text-gray-600">
            We deploy custom-built AI agents that work as digital employees, handling specific tasks to make your business more efficient and responsive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="opacity-0 animate-slide-up" style={{animationDelay: `${0.1 * index}s`, animationFillMode: 'forwards'}}>
              <Card className="h-full border-2 border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
