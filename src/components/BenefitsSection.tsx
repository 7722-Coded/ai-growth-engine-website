
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const benefits = [
  {
    title: "24/7 Availability",
    description: "AI agents work around the clock, never taking breaks or vacations, ensuring your business is always responsive."
  },
  {
    title: "Cost Reduction",
    description: "Reduce operational costs by automating repetitive tasks that would otherwise require multiple human employees."
  },
  {
    title: "Scalability",
    description: "Easily scale your operations up or down without the typical hiring and training challenges."
  },
  {
    title: "Consistent Quality",
    description: "AI agents deliver consistent service quality without the variability that comes with human performance."
  },
  {
    title: "Data-Driven Insights",
    description: "Gain valuable insights from all interactions, helping you make better business decisions."
  },
  {
    title: "Human Staff Empowerment",
    description: "Free your human staff from repetitive tasks so they can focus on higher-value activities that grow your business."
  }
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="section-spacing bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose AI Growth Partners</h2>
          <p className="text-xl text-gray-600">
            Our AI agents deliver tangible benefits that help your business operate more efficiently and grow faster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="opacity-0 animate-slide-up" 
              style={{animationDelay: `${0.1 * index}s`, animationFillMode: 'forwards'}}
            >
              <Card className="h-full bg-gradient-to-br from-white to-accent/30 border border-accent/50 hover:shadow-lg transition-all">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">
                    <div className="flex items-center">
                      <div className="bg-primary text-white w-8 h-8 flex items-center justify-center rounded-full mr-3">
                        {index + 1}
                      </div>
                      {benefit.title}
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">
                    {benefit.description}
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

export default BenefitsSection;
