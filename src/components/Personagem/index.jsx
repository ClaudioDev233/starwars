import PropType from "prop-types";
import "./styles.css";

function Personagem({
  dados
}) {
  return (
    <div className="content">
      <div className="card">
        <h2>{dados.nome}</h2>
        <hr />
        <div className="person-data">
          <p>
            Ano de nascimento: <span>{dados.nascimento}</span>
          </p>
          <p>
            Sexo: <span>{dados.genero}</span>
          </p>
          <p>
            Peso (kg): <span>{dados.peso}</span>
          </p>
          <p>
            Altura (cm): <span>{dados.altura}</span>
          </p>
          <p>
            Cor dos olhos: <span>{dados.corOlhos}</span>
          </p>
          <p>
            Cor do cabelo: <span>{dados.corCabelo}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

Personagem.propTypes = {
  nome: PropType.string,
  nascimento: PropType.string,
  genero: PropType.string,
  peso: PropType.string,
  altura: PropType.string,
  corOlhos: PropType.string,
  corCabelo: PropType.string,
};

export default Personagem;