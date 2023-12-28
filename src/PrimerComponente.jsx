import PropTypes from 'prop-types';

export const PrimerComponente = ({titulo = 'Esta es la seccion de propos:',subtitulo,sumando}) => {
  return (
    <>
      <h1 className=" font-bold text-3xl p-8">{titulo}</h1>
      <h2 className=" text-2xl p-8">{subtitulo}</h2>
      <h3 className=" text-2xl p-8">{sumando + 5 }</h3>
    </>
  );
};

PrimerComponente.propTypes={
  titulo:PropTypes.string.isRequired,
  subtitulo:PropTypes.string.isRequired,
  sumando:PropTypes.number.isRequired
}

PrimerComponente.defaultProps={
  subtitulo:'YA deja de dar error miershda'
}