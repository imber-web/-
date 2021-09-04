import { Card, Button } from '@alifd/next';
import styles from './index.module.scss'

const commonProps = {
    subTitle: "SubTitle",
    extra: (
        <Button text type="primary">
            Link
        </Button>
    )
};

const Home = () => {
    return (
        <div style={{ overflow: 'hidden', width: '90%', margin: '0 auto',paddingTop:'40px' }} >
            <Card free>
                <Card.Header title="Simple Card" {...commonProps} />
                <Card.Content>
                    Lorem ipsum dolor sit amet, est viderer iuvaret perfecto et. Ne
                    petentium quaerendum nec, eos ex recteque mediocritatem, ex usu assum
                    legendos temporibus. Ius feugiat pertinacia an, cu verterem praesent
                    quo.
                </Card.Content>
                <Card.Content>
                    Lorem ipsum dolor sit amet, est viderer iuvaret perfecto et. Ne
                    petentium quaerendum nec, eos ex recteque mediocritatem, ex usu assum
                    legendos temporibus. Ius feugiat pertinacia an, cu verterem praesent
                    quo.
                </Card.Content>
            </Card>
            <Card free style={{ marginTop: '20px' }}>
                <Card.Header title="Simple Card" {...commonProps} />
                <Card.Content>
                    Lorem ipsum dolor sit amet, est viderer iuvaret perfecto et. Ne
                    petentium quaerendum nec, eos ex recteque mediocritatem, ex usu assum
                    legendos temporibus. Ius feugiat pertinacia an, cu verterem praesent
                    quo.
                </Card.Content>
                <Card.Content>
                    Lorem ipsum dolor sit amet, est viderer iuvaret perfecto et. Ne
                    petentium quaerendum nec, eos ex recteque mediocritatem, ex usu assum
                    legendos temporibus. Ius feugiat pertinacia an, cu verterem praesent
                    quo.
                </Card.Content>
            </Card>
            <Card free style={{ marginTop: '20px' }}>
                <Card.Header title="Simple Card" {...commonProps} />
                <Card.Content>
                    Lorem ipsum dolor sit amet, est viderer iuvaret perfecto et. Ne
                    petentium quaerendum nec, eos ex recteque mediocritatem, ex usu assum
                    legendos temporibus. Ius feugiat pertinacia an, cu verterem praesent
                    quo.
                </Card.Content>
            </Card>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Card free style={{ marginTop: '20px', width: '49%' }}>
                    <Card.Header title="Simple Card" {...commonProps} />
                    <Card.Content>
                        Lorem ipsum dolor sit amet, est viderer iuvaret perfecto et. Ne
                        petentium quaerendum nec, eos ex recteque mediocritatem, ex usu assum
                        legendos temporibus. Ius feugiat pertinacia an, cu verterem praesent
                        quo.
                    </Card.Content>
                </Card>
                <Card free style={{ marginTop: '20px', width: '49%'  }}>
                    <Card.Header title="Simple Card" {...commonProps} />
                    <Card.Content>
                        Lorem ipsum dolor sit amet, est viderer iuvaret perfecto et. Ne
                        petentium quaerendum nec, eos ex recteque mediocritatem, ex usu assum
                        legendos temporibus. Ius feugiat pertinacia an, cu verterem praesent
                        quo.
                    </Card.Content>
                </Card>
            </div>

        </div>
    );
};

export default Home;
