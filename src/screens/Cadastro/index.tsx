import { Form, useNavigate } from "react-router";
import {
  Container,
  Description,
  Illustration,
  Section,
  SectionWrapper,
  Title,
} from "./style";
import Fieldset from "../../components/Fieldset";
import Label from "../../components/Label";
import CampoTexto from "../../components/CampoTexto";
import { useState } from "react";
import Botao from "../../components/Botao";
import ilustracao from "../../../public/ilustacao-cadastro.png";

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [renda, setRenda] = useState("");

  const navigate = useNavigate();

  const aoSubmeterFormulario = (evento: React.FormEvent) => {
    evento.preventDefault();
    navigate("/home");
  };
  <Illustration src={ilustracao} />;

  return (
    <Section>
      <SectionWrapper>
        <Container>
          <Title>Configuração financeira</Title>
          <Description>
            Boas-vindas à plataforma que protege seu bolso! Antes de começar,
            precisamos de algumas informações sobre sua rotina financeira. Vamos
            lá?
          </Description>
          <Form>
            <Fieldset>
              <Label htmlFor="nome">Nome</Label>
              <CampoTexto
                type="text"
                name="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </Fieldset>
            <Fieldset>
              <Label htmlFor="renda">Renda mensal total</Label>
              <CampoTexto
                type="text"
                name="renda"
                value={renda}
                onChange={(e) => setRenda(e.target.value)}
              />
            </Fieldset>
          </Form>
          <Botao $variante="primario" onClick={aoSubmeterFormulario}>
            Ir para o app
          </Botao>
        </Container>
        <Illustration
          src={ilustracao}
          alt="ilustração da tela de cadastro. Um avatar mexendo em alguns gráficos"
        />
      </SectionWrapper>
    </Section>
  );
};

export default Cadastro;
