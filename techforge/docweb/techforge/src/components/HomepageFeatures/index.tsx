import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Encontre a Ferramenta Ideal',
    Svg: require('@site/static/img/find.svg').default,
    description: (
      <>
        Nossa plataforma permite que você faça a escolha perfeita para o seu projeto com uma variedade de ferramentas disponíveis.
      </>
    ),
  },
  {
    title: 'Fácil de Usar',
    Svg: require('@site/static/img/okay.svg').default,
    description: (
      <>
        Projetado para ser fácil de usar, permitindo que você comece rapidamente sem complicações com uma configuração intuitiva e uma interface amigável.
      </>
    ),
  },
  {
    title: 'Otimize seu Tempo de Busca',
    Svg: require('@site/static/img/clock.svg').default,
    description: (
      <>
        Opções diversificadas e intuitivas, você encontra rapidamente as soluções ideais para suas necessidades, eliminando o desperdício de tempo.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
