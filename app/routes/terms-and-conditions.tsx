/* eslint-disable react/no-unescaped-entities */

import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Terms and Conditions - Next Generation Chemistry" },
    {
      name: "description",
      content: "Next Generation Chemistry Terms and Conditions page.",
    },
  ];
};


export default function TermsAndConditions() {
  return (
    <section className="mt-24 min-h-screen bg-gray-100 flex flex-col">
      <div className="bg-main text-black py-4 text-center">
        <h1 className="text-3xl font-bold">Termos de Serviço</h1>
      </div>
      <div className="flex-grow container mx-auto p-8">
        <h2 className="text-2xl font-semibold mb-4">1. Termos</h2>
        <p className="mb-4">
          Ao acessar ao site Next Generation Chemistry, concorda em cumprir
          estes termos de serviço, todas as leis e regulamentos aplicáveis e
          concorda que é responsável pelo cumprimento de todas as leis locais
          aplicáveis. Se você não concordar com algum desses termos, está
          proibido de usar ou acessar este site. Os materiais contidos neste
          site são protegidos pelas leis de direitos autorais e marcas
          comerciais aplicáveis.
        </p>

        <h2 className="text-2xl font-semibold mb-4">2. Uso de Licença</h2>
        <p className="mb-4">
          É concedida permissão para baixar temporariamente uma cópia dos
          materiais (informações ou software) no site Next Generation Chemistry
          , apenas para visualização transitória pessoal e não comercial. Esta é
          a concessão de uma licença, não uma transferência de título e, sob
          esta licença, você não pode:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Modificar ou copiar os materiais;</li>
          <li>
            Usar os materiais para qualquer finalidade comercial ou para
            exibição pública (comercial ou não comercial);
          </li>
          <li>
            Tentar descompilar ou fazer engenharia reversa de qualquer software
            contido no site Next Generation Chemistry;
          </li>
          <li>
            Remover quaisquer direitos autorais ou outras notações de
            propriedade dos materiais; ou
          </li>
          <li>
            Transferir os materiais para outra pessoa ou 'espelhe' os materiais
            em qualquer outro servidor.
          </li>
        </ul>
        <p className="mb-4">
          Esta licença será automaticamente rescindida se você violar alguma
          dessas restrições e poderá ser rescindida por Next Generation
          Chemistry a qualquer momento. Ao encerrar a visualização desses
          materiais ou após o término desta licença, você deve apagar todos os
          materiais baixados em sua posse, seja em formato eletrónico ou
          impresso.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          3. Isenção de responsabilidade
        </h2>
        <p className="mb-4">
          Os materiais no site da Next Generation Chemistry são fornecidos 'como
          estão'. Next Generation Chemistry não oferece garantias, expressas ou
          implícitas, e, por este meio, isenta e nega todas as outras garantias,
          incluindo, sem limitação, garantias implícitas ou condições de
          comercialização, adequação a um fim específico ou não violação de
          propriedade intelectual ou outra violação de direitos.
        </p>
        <p className="mb-4">
          Além disso, o Next Generation Chemistry não garante ou faz qualquer
          representação relativa à precisão, aos resultados prováveis ou à
          confiabilidade do uso dos materiais em seu site ou de outra forma
          relacionado a esses materiais ou em sites vinculados a este site.
        </p>

        <h2 className="text-2xl font-semibold mb-4">4. Limitações</h2>
        <p className="mb-4">
          Em nenhum caso o Next Generation Chemistry ou seus fornecedores serão
          responsáveis por quaisquer danos (incluindo, sem limitação, danos
          por perda de dados ou lucro ou devido a interrupção dos negócios)
          decorrentes do uso ou da incapacidade de usar os materiais em Next
          Generation Chemistry, mesmo que Next Generation Chemistry ou um
          representante autorizado da Next Generation Chemistry tenha sido
          notificado oralmente ou por escrito da possibilidade de tais danos.
          Como algumas jurisdições não permitem limitações em garantias
          implícitas, ou limitações de responsabilidade por danos consequentes
          ou incidentais, essas limitações podem não se aplicar a você.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          5. Precisão dos materiais
        </h2>
        <p className="mb-4">
          Os materiais exibidos no site da Next Generation Chemistry podem
          incluir erros técnicos, tipográficos ou fotográficos. Next Generation
          Chemistry não garante que qualquer material em seu site seja preciso,
          completo ou atual. Next Generation Chemistry pode fazer alterações nos
          materiais contidos em seu site a qualquer momento, sem aviso prévio.
          No entanto, Next Generation Chemistry não se compromete a atualizar os
          materiais.
        </p>

        <h2 className="text-2xl font-semibold mb-4">6. Links</h2>
        <p className="mb-4">
          O Next Generation Chemistry não analisou todos os sites vinculados ao
          seu site e não é responsável pelo conteúdo de nenhum site vinculado. A
          inclusão de qualquer link não implica endosso por Next Generation
          Chemistry do site. O uso de qualquer site vinculado é por conta e
          risco do usuário.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Modificações</h2>
        <p className="mb-4">
          O Next Generation Chemistry pode revisar estes termos de serviço do
          site a qualquer momento, sem aviso prévio. Ao usar este site, você
          concorda em ficar vinculado à versão atual desses termos de serviço.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Lei aplicável</h2>
        <p>
          Estes termos e condições são regidos e interpretados de acordo com as
          leis do Next Generation Chemistry e você se submete irrevogavelmente à
          jurisdição exclusiva dos tribunais naquele estado ou localidade.
        </p>
      </div>
    </section>
  );
}
