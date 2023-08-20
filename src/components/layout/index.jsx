import LeftHandComponent from "./LeftHandComponent"
import RightHandComponent from "./RightHandComponent"
import SplitScreen from "./SplitScreen"

const Layout = () => {
    return (
        <>
        <SplitScreen
          leftWeight={1 / 2}
          rightWeight={1}
        >
          <LeftHandComponent />
          <RightHandComponent />
        </SplitScreen>
      </>
    )
}

export default Layout