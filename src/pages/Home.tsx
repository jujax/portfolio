import {
  AmazonwebservicesOriginalWordmark,
  AnsibleOriginalWordmark,
  CplusplusOriginal,
  DockerOriginalWordmark,
  ExpressOriginalWordmark,
  GithubOriginalWordmark,
  GitlabOriginalWordmark,
  GooglecloudOriginalWordmark,
  JavascriptOriginal,
  KubernetesOriginalWordmark,
  LinuxOriginal,
  MongodbOriginalWordmark,
  NestjsOriginalWordmark,
  NodejsOriginalWordmark,
  PostgresqlOriginalWordmark,
  PythonOriginalWordmark,
  ReactOriginalWordmark,
  RedisOriginalWordmark,
  SqliteOriginalWordmark,
  TerraformOriginalWordmark,
  TypescriptOriginal,
} from "devicons-react";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1>Hello World, I'm Julien</h1>
        <p className="text-xl">I am Fullstack developper</p>
      </div>

      <div className="container mx-auto px-4 space-y-24">
        <section>
          <h2 className="text-3xl font-bold mb-12 text-center">Langages</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 justify-items-center items-center">
            <div className="w-24 md:w-32 lg:w-40">
              <JavascriptOriginal size="100%" />
            </div>
            <div className="w-24 md:w-32 lg:w-40">
              <TypescriptOriginal size="100%" />
            </div>
            <div className="w-24 md:w-32 lg:w-40">
              <PythonOriginalWordmark size="100%" />
            </div>
            <div className="w-24 md:w-32 lg:w-40">
              <CplusplusOriginal size="100%" />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-12 text-center">
            Frameworks & Libraries
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 justify-items-center items-center">
            <div className="w-24 md:w-32 lg:w-40">
              <NodejsOriginalWordmark size="100%" />
            </div>
            <div className="w-24 md:w-32 lg:w-40">
              <ExpressOriginalWordmark size="100%" />
            </div>
            <div className="w-24 md:w-32 lg:w-40">
              <ReactOriginalWordmark size="100%" />
            </div>
            <div className="w-24 md:w-32 lg:w-40">
              <NestjsOriginalWordmark size="100%" />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-12 text-center">DevOps</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 justify-items-center items-center">
            <div className="w-24 md:w-32 lg:w-40">
              <AnsibleOriginalWordmark size="100%" />
            </div>
            <div className="w-24 md:w-32 lg:w-40">
              <TerraformOriginalWordmark size="100%" />
            </div>
            <div className="w-24 md:w-32 lg:w-40">
              <DockerOriginalWordmark size="100%" />
            </div>
            <div className="w-24 md:w-32 lg:w-40">
              <KubernetesOriginalWordmark size="100%" />
            </div>
            <div className="w-24 md:w-32 lg:w-40">
              <GitlabOriginalWordmark size="100%" />
            </div>
            <div className="w-24 md:w-32 lg:w-40">
              <GithubOriginalWordmark size="100%" />
            </div>
            <div className="w-24 md:w-32 lg:w-40">
              <LinuxOriginal size="100%" />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-12 text-center">Cloud</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center items-center max-w-2xl mx-auto">
            <div className="w-24 md:w-32 lg:w-40">
              <AmazonwebservicesOriginalWordmark size="100%" />
            </div>
            <div className="w-24 md:w-32 lg:w-40">
              <GooglecloudOriginalWordmark size="100%" />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-12 text-center">
            Bases de données
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 justify-items-center items-center">
            <div className="w-24 md:w-32 lg:w-40">
              <PostgresqlOriginalWordmark size="100%" />
            </div>
            <div className="w-24 md:w-32 lg:w-40">
              <RedisOriginalWordmark size="100%" />
            </div>
            <div className="w-24 md:w-32 lg:w-40">
              <SqliteOriginalWordmark size="100%" />
            </div>
            <div className="w-24 md:w-32 lg:w-40">
              <MongodbOriginalWordmark size="100%" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
