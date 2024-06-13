'use client';

import TitleSection from '@/components/course/title-section';
import Summary from '@/components/course/summary';
import Progress from '@/components/course/progress';
import Lesson from '@/components/course/lesson';
import VideoSection from '@/components/course/video-section';

const Page: React.FC = () => {
  return (
    <>
      <TitleSection nameSection="Course" />
      <div className="flex h-full bg-white px-7">
        <div className="flex-1 overflow-y-auto p-7">
          <VideoSection />
          <Summary />
        </div>
        <div className="mx-4 h-full w-px bg-gray-300"></div> {/* Divider with Tailwind CSS */}
        <div className="w-1/3 overflow-y-auto p-4">
          <Progress />
          <Lesson />
        </div>
      </div>
    </>
  );
};

export default Page;
