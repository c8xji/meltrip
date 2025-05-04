import travelInfo from "../data/travelInfoData"
import Layout from "../components/Layout"

const Info = () => {
  return (
    <Layout>
      <div className="max-w-screen-lg mx-auto py-20 px-4 sm:px-6 text-white">
        <h1 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-10 text-center">旅遊資訊 Q&A</h1>

        <div className="space-y-12">
          {travelInfo.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-xl sm:text-2xl font-semibold text-yellow-300 mb-4">{section.category}</h2>
              <div className="space-y-6">
                {section.qas.map((qa, qIdx) => (
                  <div key={qIdx} className="bg-gray-800 p-4 sm:p-6 rounded-xl shadow">
                    <h3 className="text-base sm:text-lg font-bold text-yellow-200 mb-2">Q：{qa.question}</h3>
                    <p className="text-gray-100 leading-relaxed">{qa.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Info
