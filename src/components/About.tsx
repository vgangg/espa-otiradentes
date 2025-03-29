import { Award, Users, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Sobre Nós</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-6">
              Fundada em 2010, a ELITEFIGHT nasceu da paixão por artes marciais e do desejo de criar um espaço onde pessoas de todas as idades e níveis pudessem aprender técnicas de defesa pessoal, melhorar o condicionamento físico e desenvolver disciplina mental.
            </p>
            <p className="text-lg mb-6">
              Nossa missão é proporcionar um ambiente seguro e acolhedor, onde cada aluno possa evoluir no seu próprio ritmo, superando limites e alcançando seus objetivos pessoais.
            </p>
            <p className="text-lg">
              Com instrutores certificados e experientes, oferecemos treinamento de alta qualidade em Muay Thai, Boxe e Jiu-Jitsu, adaptando as aulas às necessidades individuais de cada praticante.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8">
            <div className="flex items-start">
              <div className="bg-red-600 p-3 rounded-full mr-4">
                <Award className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Instrutores Qualificados</h3>
                <p>Nossa equipe é formada por profissionais com anos de experiência e certificações internacionais.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-red-600 p-3 rounded-full mr-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Comunidade Acolhedora</h3>
                <p>Mais que uma academia, somos uma família que se apoia mutuamente no caminho das artes marciais e iremos sempre prezar pelo seu desenvolvimento, tanto mental quanto fisico.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-red-600 p-3 rounded-full mr-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Foco em Resultados</h3>
                <p>Desenvolvemos programas personalizados para garantir que você alcance seus objetivos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
