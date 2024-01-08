import TimerDisplay from '../../Pages/TimeTracking/TimerDisplay';

const BreakModal = ({timer}) => {
    return (
        <div
          className="fixed z-10 inset-0 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>•

            <div
              className="inline-block align-bottom bg-white rounded-lg text-center overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-labelledby="modal-headline"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <h3 className="text-xl leading-6 font-medium text-gray-900 mb-4">
                  Take a 30sec Break!
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  Relax and come back recharged for your next session.
                </p>
                <div className="text-3xl font-bold mb-4">
                  <TimerDisplay timer={timer} />
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default BreakModal;