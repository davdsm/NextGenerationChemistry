/* eslint-disable react/no-unescaped-entities */

import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Privacy Policy - Next Generation Chemistry" },
    {
      name: "description",
      content: "Next Generation Chemistry privacy policy page.",
    },
  ];
};

export default function PrivacyPolicy() {
  return (
    <section className="mt-24 min-h-screen bg-gray-100 flex flex-col">
      <div className="bg-main text-black py-4 text-center">
        <h1 className="text-3xl font-bold">Política de Privacidade</h1>
      </div>
      <div className="flex-grow container mx-auto p-8">
        <p className="mb-4">
          A sua privacidade é importante para nós. É política do Next Generation
          Chemistry respeitar a sua privacidade em relação a qualquer informação
          sua que possamos coletar no site Next Generation Chemistry, e outros
          sites que possuímos e operamos.
        </p>

        <p className="mb-4">
          Solicitamos informações pessoais apenas quando realmente precisamos
          delas para lhe fornecer um serviço. Fazemo-lo por meios justos e
          legais, com o seu conhecimento e consentimento. Também informamos por
          que estamos coletando e como será usado.
        </p>

        <p className="mb-4">
          Apenas retemos as informações coletadas pelo tempo necessário para
          fornecer o serviço solicitado. Quando armazenamos dados, protegemos
          dentro de meios comercialmente aceitáveis para evitar perdas e
          roubos, bem como acesso, divulgação, cópia, uso ou modificação não
          autorizados.
        </p>

        <p className="mb-4">
          Não compartilhamos informações de identificação pessoal publicamente
          ou com terceiros, exceto quando exigido por lei.
        </p>

        <p className="mb-4">
          O nosso site pode ter links para sites externos que não são operados
          por nós. Esteja ciente de que não temos controle sobre o conteúdo e
          práticas desses sites e não podemos aceitar responsabilidade por suas
          respectivas políticas de privacidade.
        </p>

        <p className="mb-4">
          Você é livre para recusar a nossa solicitação de informações pessoais,
          entendendo que talvez não possamos fornecer alguns dos serviços
          desejados.
        </p>

        <p className="mb-4">
          O uso continuado de nosso site será considerado como aceitação de
          nossas práticas em torno de privacidade e informações pessoais. Se
          você tiver alguma dúvida sobre como lidamos com dados do usuário e
          informações pessoais, entre em contacto connosco.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">Google AdSense</h2>
        <p className="mb-4">
          O serviço Google AdSense que usamos para veicular publicidade usa um
          cookie DoubleClick para veicular anúncios mais relevantes em toda a
          Web e limitar o número de vezes que um determinado anúncio é exibido
          para você.
        </p>
        <p className="mb-4">
          Para mais informações sobre o Google AdSense, consulte as FAQs
          oficiais sobre privacidade do Google AdSense.
        </p>
        <p className="mb-4">
          Utilizamos anúncios para compensar os custos de funcionamento deste
          site e fornecer financiamento para futuros desenvolvimentos. Os
          cookies de publicidade comportamental usados por este site foram
          projetados para garantir que você forneça os anúncios mais relevantes
          sempre que possível, rastreando anonimamente seus interesses e
          apresentando coisas semelhantes que possam ser do seu interesse.
        </p>
        <p className="mb-4">
          Vários parceiros anunciam em nosso nome e os cookies de rastreamento
          de afiliados simplesmente nos permitem ver se nossos clientes
          acessaram o site através de um dos sites de nossos parceiros, para que
          possamos credita-los adequadamente e, quando aplicável, permitir que
          nossos parceiros afiliados ofereçam qualquer promoção que pode
          fornecê-lo para fazer uma compra.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">
          Compromisso do Usuário
        </h2>
        <p className="mb-4">
          O usuário se compromete a fazer uso adequado dos conteúdos e da
          informação que o Next Generation Chemistry oferece no site e com
          caráter enunciativo, mas não limitativo:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            A) Não se envolver em atividades que sejam ilegais ou contrárias à
            boa fé e à ordem pública;
          </li>
          <li>
            B) Não difundir propaganda ou conteúdo de natureza racista,
            xenofóbica, ou azar, qualquer tipo de pornografia ilegal, de
            apologia ao terrorismo ou contra os direitos humanos;
          </li>
          <li>
            C) Não causar danos aos sistemas físicos (hardwares) e lógicos
            (softwares) do Next Generation Chemistry, de seus fornecedores ou
            terceiros, para introduzir ou disseminar vírus informáticos ou
            quaisquer outros sistemas de hardware ou software que sejam capazes
            de causar danos anteriormente mencionados.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-4">Mais informações</h2>
        <p className="mb-4">
          Esperamos que esteja esclarecido e, como mencionado anteriormente, se
          houver algo que você não tem certeza se precisa ou não, geralmente é
          mais seguro deixar os cookies ativados, caso interaja com um dos
          recursos que você usa em nosso site.
        </p>

        <p className="mb-4">
          Esta política é efetiva a partir de 1 October 2024 23:15.
        </p>
      </div>
    </section>
  );
}
