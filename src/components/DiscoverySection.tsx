
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const DiscoverySection = () => {
  const handleBookCall = () => {
    window.open("https://cal.com/aigrowthpartners", "_blank");
  };

  return (
    <section id="discovery" className="section-spacing bg-primary text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
            <p className="text-xl opacity-90">
              Book a no-obligation discovery session to see how custom AI agents can help your business grow.
            </p>
          </div>

          <Card className="bg-white p-8 rounded-xl shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-primary">What to Expect</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-4 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                      1
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        45-minute video call with our AI solutions experts
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                      2
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        Discussion of your business challenges and opportunities
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                      3
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        Initial ideas for potential AI agent implementations
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                      4
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        Clear next steps and recommended action plan
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col justify-center">
                <div className="bg-accent p-6 rounded-lg mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">No Obligation, High Value</h4>
                  <p className="text-gray-700">
                    Even if you decide not to move forward with us, you'll walk away with valuable insights about how AI can benefit your specific business.
                  </p>
                </div>
                <Button 
                  className="bg-primary hover:bg-primary-dark text-white text-lg py-6"
                  onClick={handleBookCall}
                >
                  Schedule Your Discovery Session
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DiscoverySection;
